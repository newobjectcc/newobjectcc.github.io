
下面主要介绍Map集合。


### JAVA 集合关系（简图）

![集合.jpg](.\img\JAVA基础\集合.jpg)

（图片来源网络）



Map集合没有继承Collection接口,也是最上层接口，Map 和 Collection不同，Map存储的是键值对（key-value）。


Map接口中有如下部分方法：

![Map接口.png](.\img\JAVA基础\Map接口.png)

（JDK 8）

Map 接口有两个常用的实现类，分别为HashMap和TreeMap。


### HashMap 

![HashMap类.png](.\img\JAVA基础\HashMap类.png)

HashMap 实现了Cloneable接口，支持对象克隆。


![HashMap默认初始容量.png](.\img\JAVA基础\HashMap默认初始容量.png)

默认的初始容量为 16 

![HashMap最大容量.png](.\img\JAVA基础\HashMap最大容量.png)


```
最大容量为 1<<30（等于1073741824 ）
```


![HashMap装载系数.png](.\img\JAVA基础\HashMap装载系数.png)

装载系数，也叫装载因子，用来表示HashMap填满的程度， 默认值为0.75f。填满程度（也就是阈值)这样计算的，阈值 = 装载系数 * 容量。

装载系数为什么是0.75f [了解 >>](https://www.jianshu.com/p/64f6de3ffcc1) 



![HashMap红黑树阈值.png](.\img\JAVA基础\HashMap红黑树阈值.png)

桶中的链表元素个数达到这个阈值时链表会转换为红黑树结构，用红黑树来替代链表。

JDK 8 之前HashMap的实现是数组+链表，即使哈希函数取得再好，也很难达到元素百分百均匀分布。

当HashMap中有大量的元素都存放到同一个桶中时（hash相同），这个桶下有个链表，这个时候HashMap 就相当于一个单链表，假如单链表有 n 个元素，遍历的时间复杂度就是 O(n)，完全失去了它的优势。

针对这种情况JDK 8 中引入了红黑树（查找时间复杂度为 O(logn)）来优化这个问题


![HashMap红黑树还原为链表阈值.png](.\img\JAVA基础\HashMap红黑树还原为链表阈值.png)

当扩容时，桶中元素个数小于这个值，就会把树形的桶元素 还原（切分）为链表结构


![HashMap最小数型化容量.png](.\img\JAVA基础\HashMap最小数型化容量.png)

当哈希表中的容量大于这个值时，表中的桶才进行树形化，否则桶内元素太多时会扩容，而不是树形化，为了避免进行扩容、树形化选择的冲突，这个值不能小于 4 * TREEIFY_THRESHOLD


![HashMap内部数组.png](.\img\JAVA基础\HashMap内部数组.png)

内部的数组结构

![HashMap内部链表.png](.\img\JAVA基础\HashMap内部链表.png)

内部的链表结构

![HashMap内部红黑树结构.png](.\img\JAVA基础\HashMap内部红黑树结构.png)

内部的红黑树结构



**HashMap 的方法**

添加元素方法 put ,putAll：

```
// 保存元素
public V put(K key, V value) {
    return putVal(hash(key), key, value, false, true);
}

// 生成hash值根据 key的hashCode，这个方法也叫扰动函数
// 详见：https://www.zhihu.com/question/20733617
static final int hash(Object key) {
    int h;
    return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
}

// 向集合中添加元素
final V putVal(int hash, K key, V value, boolean onlyIfAbsent,
               boolean evict) {
    Node<K,V>[] tab; Node<K,V> p; int n, i;
    // 当容纳元素的table数组（散列表）为空或长度为零时需要调用resize()对table进行容量初始化（扩容）
    if ((tab = table) == null || (n = tab.length) == 0)
        n = (tab = resize()).length;
    // i = (n - 1) & hash] 是对hash取模，计算出元素所在位置，然后判断元素是否存在
    // 为什么这样取模，原因是位运算效率较高，当满足lenth = 2^n时 hash % n = hash & (n - 1)这个等式成立
    //（  hash & (n - 1) 和 (n - 1) & hash 是按位“与”运算结果是一样的  ）。
    if ((p = tab[i = (n - 1) & hash]) == null)
        // 创建一个常规节点（链表节点，非树节点），
        // 通过static class Node<K,V> implements Map.Entry<K,V> 这个内部类创建的节点，且保存到数组中
        tab[i] = newNode(hash, key, value, null);
    else {
        // 数组结构中已经存在元素执行下列操作
        Node<K,V> e; K k;
        if (p.hash == hash &&
            ((k = p.key) == key || (key != null && key.equals(k)))) // 判断是相同的key时
            e = p;
        else if (p instanceof TreeNode) // 节点为红黑树结构时
            e = ((TreeNode<K,V>)p).putTreeVal(this, tab, hash, key, value);
        else {
            for (int binCount = 0; ; ++binCount) {
                if ((e = p.next) == null) {
                    // 向链表结构下添加元素
                    p.next = newNode(hash, key, value, null);
                    // 如果链表长度 >= TREEIFY_THRESHOLD - 1 = 7 时，链表将转换为红黑树结构
                    if (binCount >= TREEIFY_THRESHOLD - 1) // -1 for 1st
                        treeifyBin(tab, hash); 
                    break;
                }
                if (e.hash == hash &&
                    ((k = e.key) == key || (key != null && key.equals(k))))
                    break;
                p = e;
            }
        }
        if (e != null) { // existing mapping for key
            V oldValue = e.value;
            if (!onlyIfAbsent || oldValue == null)
                e.value = value;
            afterNodeAccess(e);
            return oldValue;
        }
    }
    ++modCount;
    if (++size > threshold) // 长度大于阈值时需要扩容
        resize();
    afterNodeInsertion(evict);
    return null;
}


// 扩容方法
final Node<K,V>[] resize() {
    Node<K,V>[] oldTab = table;
    // 旧的数组（散列）长度
    int oldCap = (oldTab == null) ? 0 : oldTab.length;
    // 旧的扩容阈值 
    int oldThr = threshold; 
    int newCap, newThr = 0;
    if (oldCap > 0) {
        // 当容量达到最大容量时，直接返回不需要再扩容
        if (oldCap >= MAXIMUM_CAPACITY) {
            threshold = Integer.MAX_VALUE;
            return oldTab;
        }
        else if ((newCap = oldCap << 1) < MAXIMUM_CAPACITY &&
                 oldCap >= DEFAULT_INITIAL_CAPACITY)
            // 当旧容量的2倍小于最大容量时（容量长度以2^n 去增长）
            // 并且旧容量大于等于默认初始容量时，新的阈值=旧阈值的2倍
            // 因为 oldThr << 1 等于当前 newCap * DEFAULT_LOAD_FACTOR 
            newThr = oldThr << 1; // double threshold
    }
    else if (oldThr > 0) // initial capacity was placed in threshold
        // 被放置在threshold中的初始容量
        /*
        public HashMap(int initialCapacity, float loadFactor) {
            ... ...
            this.loadFactor = loadFactor;
            this.threshold = tableSizeFor(initialCapacity);
        }*/
        // 当使用有参数构造方法时，如上面的构造方法初始化时，会执行此代码段
        newCap = oldThr;
    else {               // zero initial threshold signifies using defaults
        // 使用默认初始值进行初始化
        newCap = DEFAULT_INITIAL_CAPACITY;
        newThr = (int)(DEFAULT_LOAD_FACTOR * DEFAULT_INITIAL_CAPACITY);
    }
    if (newThr == 0) {
        // 计算新容量的阈值，
        float ft = (float)newCap * loadFactor;
        newThr = (newCap < MAXIMUM_CAPACITY && ft < (float)MAXIMUM_CAPACITY ?
                  (int)ft : Integer.MAX_VALUE);
    }
    threshold = newThr;
    @SuppressWarnings({"rawtypes","unchecked"})
        Node<K,V>[] newTab = (Node<K,V>[])new Node[newCap]; // 创建新容量的散列表
    table = newTab;
    if (oldTab != null) { // 将旧的散列元素rehash
        for (int j = 0; j < oldCap; ++j) {
            Node<K,V> e;
            if ((e = oldTab[j]) != null) {
                oldTab[j] = null;
                if (e.next == null) // 桶中只有一个元素
                    newTab[e.hash & (newCap - 1)] = e;
                else if (e instanceof TreeNode) // 如果是红黑树结构
                    ((TreeNode<K,V>)e).split(this, newTab, j, oldCap);
                else { // preserve order
                    // 如果元素是链表
                    Node<K,V> loHead = null, loTail = null;
                    Node<K,V> hiHead = null, hiTail = null;
                    Node<K,V> next;
                    do {
                        next = e.next;
                        // 将链表中的元素根据(e.hash & oldCap)是否为0进行分割，
                        // 分成两个不同的链表，完成rehash
                        // 原因可参考：https://blog.csdn.net/bnmb888/article/details/77164485
                        if ((e.hash & oldCap) == 0) {
                            if (loTail == null)
                                loHead = e;
                            else
                                loTail.next = e;
                            loTail = e;
                        }
                        else {
                            if (hiTail == null)
                                hiHead = e;
                            else
                                hiTail.next = e;
                            hiTail = e;
                        }
                    } while ((e = next) != null);
                    if (loTail != null) {
                        loTail.next = null;
                        newTab[j] = loHead;
                    }
                    if (hiTail != null) {
                        hiTail.next = null;
                        newTab[j + oldCap] = hiHead;
                    }
                }
            }
        }
    }
    return newTab;
}


```

[^_^]: putAll 待续





获取元素方法 get：

```
public V get(Object key) {
    Node<K,V> e;
    return (e = getNode(hash(key), key)) == null ? null : e.value;
}

// 根据 hash值和ke获得元素节点
final Node<K,V> getNode(int hash, Object key) {
    Node<K,V>[] tab; Node<K,V> first, e; int n; K k;
    if ((tab = table) != null && (n = tab.length) > 0 &&
        (first = tab[(n - 1) & hash]) != null) {
        // 检查第一个元素节点根据hash和key
        if (first.hash == hash && // always check first node
            ((k = first.key) == key || (key != null && key.equals(k))))
            return first;
        if ((e = first.next) != null) { // 如果第一个节点不是要找的元素，就在链表中继续向下查找
            if (first instanceof TreeNode) // 如果是红黑树结构
                return ((TreeNode<K,V>)first).getTreeNode(hash, key);
            do { // 循环遍历链表查找元素节点根据hash和key
                if (e.hash == hash &&
                    ((k = e.key) == key || (key != null && key.equals(k))))
                    return e;
            } while ((e = e.next) != null);
        }
    }
    return null;
}


[^_^]:红黑树相关的待完善


```


### TreeMap

...


### 总结

...

[^_^]:HashMap 初始化容量和扩容方式

[^_^]:HashMap 数据结构

[^_^]:HashMap 重写hashCode() 和 equals() 方法，为什么要重写这两个方法







