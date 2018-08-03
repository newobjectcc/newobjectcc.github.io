
(源码版本为 JDK 8)

集合类在java.util包中，类型大体可以分为3种：Set、List、Map。


### JAVA 集合关系（简图）

![集合](\img\JAVA基础\集合.jpg)

（图片来源网络）


List集合和Set集合都是继承Collection接口，是List和Set的最上级接口，包含如下方法:

![Collection接口](\img\JAVA基础\Collection接口.png)


### List 集合

List是一个有序集合(也称为序列)，你可以控制每个元素被插入的位置，和根据索引访问列表中元素。List集合元素可以重复，也可以存入 null 元素。

List集合是可以根据索引来操纵集合，所以List接口在Collection接口基础增加了一些根据索引操纵集合的接口方法。

![List接口](\img\JAVA基础\List接口.png)



### 集合接口的实现类

List 集合有两个常用实现，ArrayList和LinkedList，内部采用不同数据结构来实现，不同场景下有不同的使用选择。

**ArrayList**

![ArrayList类](\img\JAVA基础\ArrayList类-1.png)

ArrayList类除了继承和实现集合接口外，还实现了RandomAccess, Cloneable接口。说明ArrayList支持*克隆*和*快速随机访问*。


**ArrayList 的内部数据结构是数组**。

![ArrayList内部数据结构-数组](\img\JAVA基础\ArrayList内部数据结构-数组.png)


**默认初始化容量为10**

![默认初始化容量](\img\JAVA基础\默认初始化容量.png)


**从查找，增加，删除，修改元素部分方法看ArrayList集合适合哪些操作**

查找元素方法：get，indexOf

```
// 直接根据索引查找元素，效率较高
public E get(int index) {
    rangeCheck(index);
    return elementData(index); // 根据索引直接返回数组中元素
}
    
    
// 根据元素查索引位置，元素不存在返回 -1 ，使用了循环遍历查找元素，查找效率取决于集合大小，元素所处的位置。
public int indexOf(Object o) {
    if (o == null) {
        for (int i = 0; i < size; i++)
            if (elementData[i]==null)
                return i;
    } else {
        for (int i = 0; i < size; i++)
            if (o.equals(elementData[i]))
                return i;
    }
    return -1;
}  

```

增加元素方法：add


```
// 增加元素，存在扩容，数据拷贝等问题，效率会变低，
// 如果要向集合中大量的添加元素可以通过构造方法指定较大的初始容量。
public boolean add(E e) {
    ensureCapacityInternal(size + 1);  // 增加 modCount!!
    elementData[size++] = e;
    return true;
}


private void ensureCapacityInternal(int minCapacity) {
ensureExplicitCapacity(calculateCapacity(elementData, minCapacity));
}


// 计算容量
private static int calculateCapacity(Object[] elementData, int minCapacity) {
    if (elementData == DEFAULTCAPACITY_EMPTY_ELEMENTDATA) {
        return Math.max(DEFAULT_CAPACITY, minCapacity);
    }
    return minCapacity;
}


// 确保容量安全
private void ensureExplicitCapacity(int minCapacity) {
    modCount++; // 集合结构修改计数器（结构修改是指那些改变列表的大小或位置等）
    // 当所需最小容量比数组容量大需要扩容
    if (minCapacity - elementData.length > 0)
        grow(minCapacity);
}


// 扩容
private void grow(int minCapacity) {
    // overflow-conscious code
    int oldCapacity = elementData.length;
    int newCapacity = oldCapacity + (oldCapacity >> 1); // 容量变为原来的1.5倍
    if (newCapacity - minCapacity < 0)
        newCapacity = minCapacity;
    if (newCapacity - MAX_ARRAY_SIZE > 0)
        newCapacity = hugeCapacity(minCapacity);
    // minCapacity is usually close to size, so this is a win:
    elementData = Arrays.copyOf(elementData, newCapacity);
}

```

删除元素方法：remove


```
// 根据索引删除元素，如果从开头和中间位置删除元素，删除位置后面的元素会向前移动，效率会比删除末尾元素低。
public E remove(int index) {
    rangeCheck(index);

    modCount++;
    E oldValue = elementData(index);

    int numMoved = size - index - 1;
    if (numMoved > 0)
        // 元素的移动拷贝
        System.arraycopy(elementData, index+1, elementData, index,
                         numMoved);
    elementData[--size] = null; // 赋值为null 明确的让垃圾回收，--size 删除元素后修改集合长度

    return oldValue;
}

```


```
// 根据集合元素删除，先循环找出要删除的元素位置索引，然后再根据索引删除。
// 和根据索引删除方法比较，多了一步通过循环查找元素索引位置的过程。
public boolean remove(Object o) {
    if (o == null) {
        for (int index = 0; index < size; index++)
            if (elementData[index] == null) {
                fastRemove(index);
                return true;
            }
    } else {
        for (int index = 0; index < size; index++)
            if (o.equals(elementData[index])) {
                fastRemove(index);
                return true;
            }
    }
    return false;
}

// 删除集合元素
private void fastRemove(int index) {
    modCount++;
    int numMoved = size - index - 1;
    if (numMoved > 0)
        System.arraycopy(elementData, index+1, elementData, index,
                         numMoved);
    elementData[--size] = null; // clear to let GC do its work
}

```


修改元素方法：set

```
// 根据索引修改元素，直接索引指向新的元素值。
public E set(int index, E element) {
    rangeCheck(index);

    E oldValue = elementData(index);
    elementData[index] = element;
    return oldValue;
}
    
```


通过上面代码可以发现，ArrayList 集合检索元素效率较高，比较适合，而对于增删效率较低。



**LinkedList**

![LinkedList集合](\img\JAVA基础\LinkedList集合.png)

LinkedList 类还实现了Deque 接口（Deque 代表算端队列，与 List 接口不同，此接口不支持通过索引访问元素），所以LinkedList 是一个List集合也是一个双端队列。 


![LinkedList类](\img\JAVA基础\LinkedList类-1.png)


```
private static class Node<E> {
    E item; // 当前元素
    Node<E> next; // 下一个节点
    Node<E> prev; // 上一个节点

    Node(Node<E> prev, E element, Node<E> next) {
        this.item = element;
        this.next = next;
        this.prev = prev;
    }
}
    
```
LinkedList 是一个链表数据结构，其中维护了一个内部类Node做为链表中的节点，first 是指向首节点，last 是指向尾节点。每个Node节点都记录上一个节点、下一个节点的引用，和当前节点所存储的元素。


链表结构如图：

![双向链表结构图](\img\JAVA基础\双向链表结构图.png)

（图片来源网络）



**从查找，增加，删除，修改元素部分方法看LinkedList集合适合哪些操作（从底层数据结构就能够发现）**

查找元素方法：get

```
// 根据索引查找元素，由于链表没有索引，所以需要从头部或尾部遍历查找。
// ArrayList 和 LinkedList底层数据结构不同导致的 ArrayList集合中查找元素效率更高，
// 因为ArrayList底层是数组，可以直接根据index索引获取元素。
public E get(int index) {
    checkElementIndex(index);
    return node(index).item;
}

Node<E> node(int index) {
    // 如果要找的元素位置小于集合长度的1/2,就从前向后遍历，否则从后向前遍历，由此可知越向中间效率越低
    if (index < (size >> 1)) {
        Node<E> x = first;
        for (int i = 0; i < index; i++)
            x = x.next;
        return x;
    } else {
        Node<E> x = last;
        for (int i = size - 1; i > index; i--)
            x = x.prev;
        return x;
    }
}

```

增加元素方法：add

由于底层数据结构不同，LinkedList增加元素效率要比ArrayList效率高，ArrayList存在扩容和拷贝等操作。

```
// 向尾部添加元素
public boolean add(E e) {
    linkLast(e);
    return true;
}

void linkLast(E e) {
    final Node<E> l = last;
    final Node<E> newNode = new Node<>(l, e, null); // 创建一个新节点
    last = newNode; // 将新节点指向尾节点（last）
    if (l == null) 
        first = newNode;//  如果newNode是集合中唯一元素（初始是空集合），那么也将newNode指向首节点（first）
    else
        l.next = newNode; // 原last节点下一个元素的引用指向新的节点（newNode）
    size++;
    modCount++;
}


// 在指定位置添加元素，index 位置越靠近中间插入效率越低，随着集合长度增大而增大
public void add(int index, E element) {
    checkPositionIndex(index);

    if (index == size) // index==size 说明集合为空或者在集合末尾添加元素
        linkLast(element);
    else
        linkBefore(element, node(index));
}

// 链表和数组不同，不能直接根据索引获得元素，链表需要从头或尾部循环遍历到指定位置获得元素
Node<E> node(int index) {
    // 如果要找的元素位置小于集合长度的1/2,就从前向后遍历，否则从后向前遍历，所以向中间效率越低
    if (index < (size >> 1)) {
        Node<E> x = first;
        for (int i = 0; i < index; i++)
            x = x.next;
        return x;
    } else {
        Node<E> x = last;
        for (int i = size - 1; i > index; i--)
            x = x.prev;
        return x;
    }
}

// 在 succ节点之前插入元素
void linkBefore(E e, Node<E> succ) {
    final Node<E> pred = succ.prev; 
    final Node<E> newNode = new Node<>(pred, e, succ);// 创建一个新节点
    succ.prev = newNode; // 
    if (pred == null)
       // 说明 succ 是首节点
        first = newNode;
    else
        pred.next = newNode;
    size++;
    modCount++;
}

```

修改元素方法：set

// LinkedList修改元素时需要先遍历找到元素，ArrayList可以直接根据索引获得元素，
// 所以LinkedList效率较低，当元素越靠近中间位置越明显。

```
public E set(int index, E element) {
    checkElementIndex(index);
    Node<E> x = node(index);
    E oldVal = x.item;
    x.item = element;
    return oldVal;
}

// 根据索引遍历出元素节点
Node<E> node(int index) {
    // 如果要找的元素位置小于集合长度的1/2,就从前向后遍历，否则从后向前遍历，所以向中间效率越低

    if (index < (size >> 1)) {
        Node<E> x = first;
        for (int i = 0; i < index; i++)
            x = x.next;
        return x;
    } else {
        Node<E> x = last;
        for (int i = size - 1; i > index; i--)
            x = x.prev;
        return x;
    }
}
```

删除元素方法：remove

// 和ArrayList相比不存在移动拷贝情况，所以LinkedList删除元素效率比ArrayList高

```
public E remove(int index) {
    checkElementIndex(index);
    return unlink(node(index));
}

// 根据索引遍历查找出目标节点
Node<E> node(int index) {
    // 如果索引小于集合长度的一半
    if (index < (size >> 1)) {
        Node<E> x = first;
        for (int i = 0; i < index; i++)
            x = x.next;
        return x;
    } else {
        Node<E> x = last;
        for (int i = size - 1; i > index; i--)
            x = x.prev;
        return x;
    }
}
    
E unlink(Node<E> x) {
    // assert x != null;
    final E element = x.item;
    final Node<E> next = x.next;
    final Node<E> prev = x.prev;

    if (prev == null) {
        first = next;
    } else {
        prev.next = next;
        x.prev = null;
    }

    if (next == null) {
        last = prev;
    } else {
        next.prev = prev;
        x.next = null;
    }

    x.item = null;
    size--;
    modCount++;
    return element;
}

```

LinkedList 实现了Deque接口，是一个双端队列，所以LinkedList又包含如下常用方法：

![Deque接口部分方法](\img\JAVA基础\Deque接口部分方法.png)



### 源码中富有争议的设计

**方法重复定义**

源码中Collection接口中的多个方法在List接口中又重复定义了一次，既然List 已经继承了Collection接口，为什么重复定义，历史原因？先有List后有Collection？

![Collection接口](\img\JAVA基础\Collection接口-1.png)
![List接口](\img\JAVA基础\List接口-1.png)


**重复实现接口**

AbstractList 已经实现List接口，ArrayList继承 AbstractList，然而ArrayList源码又实现了 List接口。

![ArrayList类](\img\JAVA基础\ArrayList类.png)
![AbstractListl类](\img\JAVA基础\AbstractListl类.png)
    
网上搜了下答案：
![重复实现接口](\img\JAVA基础\重复实现接口.png)

大意是他问过这块的开发者,这是一个错误。很久以前认为有价值的。

不知道这个答案是否正确？(仅供参考)

https://stackoverflow.com/questions/2165204/why-does-linkedhashsete-extend-hashsete-and-implement-sete


### 总结

List集合和Set集合都是继承Collection接口，是List和Set的最上级接口，List接口下有两个常用的实现类，分别为ArrayList和LinkedList，而LinkedList又实现Deque接口，所以LinkedList即是List集合也是一个双端队列。ArrayList是基于数组数据结构而实现的，而LinkedList是基于链表数据结构实现的，从数据结构特点和源码实现上来看，ArrayList可以根据索引快速获取到元素，而增加元素时需要数组的扩容拷贝，删除元素时需要数组的移动拷贝，因此ArrayList集合对查找和修改元素效率较好，对增删效率略低。而LinkedList的链表数据结构不能根据索引直接快速获取元素节点，必须从头部，或者尾部遍历到索引位置（如果索引值 小于集合长度的1/2时就从头部开始遍历，否则从尾部开始遍历，因此索引值处于中间时遍历效率会比位于两端要差。）而增加或删除元素时只需要将上下节点重新指向新的节点对象引用即可，不存在扩容，移动等情况，因此LinkedList和ArrayList相比更适合增加和删除元素操作，对查找操作效率较低。


---

### Map 集合

[Map集合见 >> ](./Java-Map.html){:target="_blank"}


[^_^]:### Set集合

[^_^]:[Set集合见 >> ](http://note.youdao.com/)


[^_^]:### 集合的迭代器（以及集合遍历时注意的问题）

[^_^]:[迭代器见 >> ](http://note.youdao.com/)







