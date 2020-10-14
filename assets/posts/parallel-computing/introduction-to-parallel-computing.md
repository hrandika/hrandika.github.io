# Overview

## Serial computing

Computers were designed to execute instruction one after another(sequentially). They were executed using a single processor. The **_problem_** is broken down to small discrete serial set of **_instructions_**. Only one instruction may execute during at any moment of time.

<center><img style="width:100%;display: block; margin: auto;" src="https://hrandika.github.io/assets/img/posts/introduction-to-parallel-computing/serialProblem.gif">
</center>

## Parallel computing

Simultaneous use of multiple compute resources to solve a computational **_problem_**.Problem need to break down in to discrete parts.Then each problem is break down to series of instructions.Instruction from each part executed simultaneously on different processors.There is an overall coordination need to happen between each parts were executed.

<center><img style="width:100%;display: block; margin: auto;" src="https://hrandika.github.io/assets/img/posts/introduction-to-parallel-computing/parallelProblem.gif">
</center>

The problem should be able to:

- Be broken apart into discrete pieces of work that can be solved simultaneously;
- Execute multiple program instructions at any moment in time;
- Be solved in less time with multiple compute resources than with a single compute resource.

## Parallel Computers

Computers that we use today are parallel from hardware level.

- Multiple functional units (Cache,GPU)
- Multiple execution units/cores
- Multiple hardware threads (ex: Hyperthread by Intel)

<center><img style="width:100%;display: block; margin: auto;" src="https://hrandika.github.io/assets/img/posts/introduction-to-parallel-computing/bgqComputeChip.jpg">
</center>

If single computer will no do the job then we can use multiple computers over network to handle parallel computing.Single computer on the network is called a **_node_**

<center><img style="width:100%;display: block; margin: auto;" src="https://hrandika.github.io/assets/img/posts/introduction-to-parallel-computing/nodesNetwork.gif">
</center>

## Why Parallel Computing?

The real world is complex. Interrelated events are happening at the same time. Each of these happen in a given temporal sequence. To calculate such we need relations we need to process parallel way to make some sense with data and do modeling and predictions. Parallel computing is much better with modeling,simulating and understanding complex, real world phenomena.

### Advantages

- Save time/money

  - In theory, throwing more resources at a task will shorten its time to completion, with potential cost savings.
  - Parallel computers can be built from cheap, commodity components

- Solve larger or complete problem

  - Many problems are so large and/or complex that it is impractical or impossible to solve them on a single computer, especially given limited computer memory.
    Example: "Grand Challenge Problems" (en.wikipedia.org/wiki/Grand_Challenge) requiring PetaFLOPS and PetaBytes of computing resources.
    Example: Web search engines/databases processing millions of transactions every second

- Provide concurrency

  - When there is single computer what we can archive is limited. With a network of computers we can archive more.
    ex : https://news.developer.nvidia.com/foldinghome-gpu-accelerated-exaflop/

- Use non-local resources

  - Using compute resources on a wide area network, or even the Internet when local compute resources are scarce or insufficient. Two examples below, each of which has over 1.7 million contributors
    Example: Folding@home

- Use parallel hardware
  - Modern computers, even laptops, are parallel in architecture with multiple processors/cores.
  - Parallel software is specifically intended for parallel hardware with multiple cores, threads, etc.
  - In most cases, serial programs run on modern computers "waste" potential computing power.

# Concepts and Terminology

## von Neumann Architecture

- Named after the Hungarian mathematician/genius John von Neumann who first authored the general requirements for an electronic computer in his 1945 papers.
- Also known as "stored-program computer" both program instructions and data are kept in electronic memory. Differs from earlier computers which were programmed through "hard wiring".
- Since then, virtually all computers have followed this basic design:

- Comprised of four main components:

  - Memory
  - Control Unit
  - Arithmetic Logic Unit
  - Input/Output

- Read/write, random access memory is used to store both program instructions and data

  - Program instructions are coded data which tell the computer to do something
  - Data is simply information to be used by the program

- Control unit fetches instructions/data from memory, decodes the instructions and then sequentially coordinates operations to accomplish the programmed task.
- Arithmetic Unit performs basic arithmetic operations
- Input/Output is the interface to the human operator

<center><img style="width:100%;display: block; margin: auto;" src="https://hrandika.github.io/assets/img/posts/introduction-to-parallel-computing/vonNeumann1.gif">
</center>

## Flynn's Classical Taxonomy

- One of the more widely used classifications, in use since 1966, is called Flynn's Taxonomy.
- Flynn's taxonomy distinguishes multi-processor computer architectures according to how they can be classified along the two independent dimensions of Instruction Stream and Data Stream. Each of these dimensions can have only one of two possible states: Single or Multiple.
- The matrix below defines the 4 possible classifications according to Flynn

<center><img style="width:100%;display: block; margin: auto;" src="https://hrandika.github.io/assets/img/posts/introduction-to-parallel-computing/flynnsTaxonomy.gif">
</center>

## Single Instruction, Single Data (SISD)

- A serial (non-parallel) computer
- Single Instruction: Only one instruction stream is being acted on by the CPU during any one clock cycle
- Single Data: Only one data stream is being used as input during any one clock cycle
- Deterministic execution
- This is the oldest type of computer
- Examples: older generation mainframes, minicomputers, workstations and single processor/core PCs

<center><img style="width:100%;display: block; margin: auto;" src="https://hrandika.github.io/assets/img/posts/introduction-to-parallel-computing/sisd2.gif">
</center>

<center><img style="width:100%;display: block; margin: auto;" src="https://hrandika.github.io/assets/img/posts/introduction-to-parallel-computing/sisd.gif">
</center>

## Single Instruction, Multiple Data (SIMD):

- A type of parallel computer
- Single Instruction: All processing units execute the same instruction at any given clock cycle
- Multiple Data: Each processing unit can operate on a different data element
- Best suited for specialized problems characterized by a high degree of regularity, such as graphics/image processing.
- Synchronous (lockstep) and deterministic execution
- Two varieties: Processor Arrays and Vector Pipelines.Examples:
  - Processor Arrays: Thinking Machines CM-2, MasPar MP-1 & MP-2, ILLIAC IV
  - Vector Pipelines: IBM 9000, Cray X-MP, Y-MP & C90, Fujitsu VP, NEC SX-2, Hitachi S820, ETA10
- Most modern computers, particularly those with graphics processor units (GPUs) employ SIMD instructions and execution units.

<center><img style="width:100%;display: block; margin: auto;" src="https://hrandika.github.io/assets/img/posts/introduction-to-parallel-computing/simd3.gif">
</center>

<center><img style="width:100%;display: block; margin: auto;" src="https://hrandika.github.io/assets/img/posts/introduction-to-parallel-computing/simd.gif">
</center>

## Multiple Instruction, Single Data (MISD):

- A type of parallel computer
- Multiple Instruction: Each processing unit operates on the data independently via separate instruction streams.
- Single Data: A single data stream is fed into multiple processing units.
- Few (if any) actual examples of this class of parallel computer have ever existed.

<center><img style="width:100%;display: block; margin: auto;" src="https://hrandika.github.io/assets/img/posts/introduction-to-parallel-computing/misd4.gif">
</center>

<center><img style="width:100%;display: block; margin: auto;" src="https://hrandika.github.io/assets/img/posts/introduction-to-parallel-computing/misd.gif">
</center>

## Multiple Instruction, Multiple Data (MIMD):

- A type of parallel computer
- Multiple Instruction: Every processor may be executing a different instruction stream
- Multiple Data: Every processor may be working with a different data stream
- Execution can be synchronous or asynchronous, deterministic or non-deterministic
- Currently, the most common type of parallel computer - most modern supercomputers fall into this category.
  Examples: most current supercomputers, networked parallel computer clusters and "grids", multi-processor SMP computers, multi-core PCs.
- Note: many MIMD architectures also include SIMD execution sub-components

<center><img style="width:100%;display: block; margin: auto;" src="https://hrandika.github.io/assets/img/posts/introduction-to-parallel-computing/mimd2.gif">
</center>

<center><img style="width:100%;display: block; margin: auto;" src="https://hrandika.github.io/assets/img/posts/introduction-to-parallel-computing/mimd.gif">
</center>

SISD: Really old computers (PDP1)  
MIMD: Super computers  
SIMD: Intel processors, Nvidia Gpus  
MISD: Really rare.

## Simple 4-width SIMD

Bellow we have a 4-width SIMD. All processors here are executing the "add" instruction at the same time.

<center><img style="width:100%;display: block; margin: auto;" src="https://hrandika.github.io/assets/img/posts/introduction-to-parallel-computing/SIMD_4_Width.png">
</center>

Don't get fooled when you hear that a GPU has 5000 cores, it's probably just saying that it has 5000 ALU (Arithimetic Logic Unit). The maximum number of things that a GPU can do at the same time is normally called "warp size" on Nvidia or "wavefront" on AMD, and is normally a 32-wide SIMD units, organized on blocks/grids.

# Parallel Computer Memory Architectures

## Shared Memory

- Shared memory parallel computers vary widely, but generally have in common the ability for all processors to access all memory as global address space.
- Multiple processors can operate independently but share the same memory resources.
- Changes in a memory location effected by one processor are visible to all other processors.
- Historically, shared memory machines have been classified as UMA and NUMA, based upon memory access times.

### Uniform Memory Access (UMA):

<center><img style="width:100%;display: block; margin: auto;" src="https://hrandika.github.io/assets/img/posts/introduction-to-parallel-computing/shared_mem.gif">
</center>

- Most commonly represented today by Symmetric Multiprocessor (SMP) machines
- Identical processors
- Equal access and access times to memory
- Sometimes called CC-UMA - Cache Coherent UMA. Cache coherent means if one processor updates a location in shared memory, all the other processors know about the update. Cache coherency is accomplished at the hardware level.

### Non-Uniform Memory Access (NUMA):

<center><img style="width:100%;display: block; margin: auto;" src="https://hrandika.github.io/assets/img/posts/introduction-to-parallel-computing/numa.gif">
</center>

- Often made by physically linking two or more SMPs
- One SMP can directly access memory of another SMP
- Not all processors have equal access time to all memories
- Memory access across link is slower
- If cache coherency is maintained, then may also be called CC-NUMA - Cache Coherent NUMA

### Advantages:

- Global address space provides a user-friendly programming perspective to memory
  Data sharing between tasks is both fast and uniform due to the proximity of memory to CPUs
- Shared Memory (UMA)

### Disadvantages:

- Primary disadvantage is the lack of scalability between memory and CPUs. Adding more CPUs can geometrically increases traffic on the shared memory-CPU path, and for cache coherent systems, geometrically increase traffic associated with cache/memory management.
- Programmer responsibility for synchronization constructs that ensure "correct" access of global memory.

## Distributed Memory

- Like shared memory systems, distributed memory systems vary widely but share a common characteristic. Distributed memory systems require a communication network to connect inter-processor memory.
- Processors have their own local memory. Memory addresses in one processor do not map to another processor, so there is no concept of global address space across all processors.
- Because each processor has its own local memory, it operates independently. Changes it makes to its local memory have no effect on the memory of other processors. Hence, the concept of cache coherency does not apply.
- When a processor needs access to data in another processor, it is usually the task of the programmer to explicitly define how and when data is communicated. Synchronization between tasks is likewise the programmer's responsibility.
- The network "fabric" used for data transfer varies widely, though it can be as simple as Ethernet.

<center><img style="width:100%;display: block; margin: auto;" src="https://hrandika.github.io/assets/img/posts/introduction-to-parallel-computing/distributed_mem.gif">
</center>

### Advantages

- Memory is scalable with the number of processors. Increase the number of processors and the size of memory increases proportionately.
- Each processor can rapidly access its own memory without interference and without the overhead incurred with trying to maintain global cache coherency.
- Cost effectiveness: can use commodity, off-the-shelf processors and networking.

### Disadvantages

- The programmer is responsible for many of the details associated with data communication between processors.
- It may be difficult to map existing data structures, based on global memory, to this memory organization.
- Non-uniform memory access times - data residing on a remote node takes longer to access than node local data.

## Hybrid Distributed-Shared Memory

- The largest and fastest computers in the world today employ both shared and distributed memory architectures.
- The shared memory component can be a shared memory machine and/or graphics processing units (GPU).
- The distributed memory component is the networking of multiple shared memory/GPU machines, which know only about their own memory - not the memory on another machine. Therefore, network communications are required to move data from one machine to another.
- Current trends seem to indicate that this type of memory architecture will continue to prevail and increase at the high end of computing for the foreseeable future.

<center><img style="width:100%;display: block; margin: auto;" src="https://hrandika.github.io/assets/img/posts/introduction-to-parallel-computing/hybrid_mem.gif">
</center>

### Advantages and Disadvantages:

- Whatever is common to both shared and distributed memory architectures.
- Increased scalability is an important advantage
- Increased programmer complexity is an important disadvantage

# Parallel Programming Models

- Shared Memory (without threads)
- Threads
- Distributed Memory / Message Passing
- Data Parallel
- Hybrid
- Single Program Multiple Data (SPMD)
- Multiple Program Multiple Data (MPMD)

**_Parallel programming models exist as an abstraction above hardware and memory architectures._**

### Shared Memory Model (without threads)

- In this programming model, processes/tasks share a common address space, which they read and write to asynchronously.
- Various mechanisms such as locks / semaphores are used to control access to the shared memory, resolve contentions and to prevent race conditions and deadlocks.
- This is perhaps the simplest parallel programming model.
- An advantage of this model from the programmer's point of view is that the notion of data "ownership" is lacking, so there is no need to specify explicitly the communication of data between tasks. All processes see and have equal access to shared memory.Program development can often be simplified.
- An important disadvantage in terms of performance is that it becomes more difficult to understand and manage data locality:
  Keeping data local to the process that works on it conserves memory accesses, cache refreshes and bus traffic that occurs when multiple processes use the same data.
  Unfortunately, controlling data locality is hard to understand and may be beyond the control of the average user.

<center>
<img style="width:100%;display: block; margin: auto;" src="https://hrandika.github.io/assets/img/posts/introduction-to-parallel-computing/sharedMemoryModel.gif">
</center>

## Threads Model

- This programming model is a type of shared memory programming.
- In the threads model of parallel programming, a single "heavy weight" process can have multiple "light weight", concurrent execution paths.

Let take a look at Java example.

```bash
mvn archetype:generate -DgroupId=com.hrandika.java -DartifactId=parallel-computing -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
```

```java
package com.hrandika.java;

public class App {
    public static void main(String[] args) {

        for (int i = 0; i < 10; i++) {
            new Thread(new Runnable() {
                public void run() {
                    System.out.println("Current Thread id: " + Thread.currentThread().getId());
                }
            }).start();
        }

    }
}
```

## Distributed Memory / Message Passing Model

<center>
<img style="width:100%;display: block; margin: auto;" src="https://hrandika.github.io/assets/img/posts/introduction-to-parallel-computing/msg_pass_model.gif">
</center>

- This model demonstrates the following characteristic
  - A set of tasks that use their own local memory during computation. Multiple tasks can reside on the same physical machine and/or across an arbitrary number of machines.
  - Tasks exchange data through communications by sending and receiving messages.
  - Data transfer usually requires cooperative operations to be performed by each process. For example, a send operation must have a matching receive operation.

### Implementations

- From a programming perspective, message passing implementations usually comprise a library of subroutines. Calls to these subroutines are imbedded in source code. The programmer is responsible for determining all parallelism.
- In 1992, the Message Passing Interface (MPI) Forum was formed with the primary goal of establishing a standard interface for message passing implementations.
- MPI is the "de facto" industry standard for message passing, replacing virtually all other message passing implementations used for production work. MPI implementations exist for virtually all popular parallel computing platforms. Not all implementations include everything in MPI-1, MPI-2 or MPI-3.

## Data Parallel Model

<center>
<img style="width:100%;display: block; margin: auto;" src="https://hrandika.github.io/assets/img/posts/introduction-to-parallel-computing/data_parallel_model.gif">
</center>

- May also be referred to as the Partitioned Global Address Space (PGAS) model.
- The data parallel model demonstrates the following characteristics

  - Address space is treated globally
  - Most of the parallel work focuses on performing operations on a data set. The data set is typically organized into a common structure, such as an array or cube.
  - A set of tasks work collectively on the same data structure, however, each task works on a different partition of the same data structure.
  - Tasks perform the same operation on their partition of work, for example, "add 4 to every array element".

- On shared memory architectures, all tasks may have access to the data structure through global memory.
- On distributed memory architectures, the global data structure can be split up logically and/or physically across tasks.

## Hybrid Model

- A hybrid model combines more than one of the previously described programming models.
- Currently, a common example of a hybrid model is the combination of the message passing model (MPI) with the threads model (OpenMP).
  - Threads perform computationally intensive kernels using local, on-node data
  - Communications between processes on different nodes occurs over the network using MPI
- This hybrid model lends itself well to the most popular hardware environment of clustered multi/many-core machines.
- Another similar and increasingly popular example of a hybrid model is using MPI with CPU-GPU (Graphics Processing Unit) programming.
  - MPI tasks run on CPUs using local memory and communicating with each other over a network.
  - Computationally intensive kernels are off-loaded to GPUs on-node.
  - Data exchange between node-local memory and GPUs uses CUDA (or something equivalent).
- Other hybrid models are common:
  - MPI with Pthreads
  - MPI with non-GPU accelerators

<center>
<img style="width:100%;display: block; margin: auto;" 
     src="https://hrandika.github.io/assets/img/posts/introduction-to-parallel-computing/hybrid_model.gif">
</center>

## SPMD and MPMD

### Single Program Multiple Data (SPMD):

- SPMD is actually a "high level" programming model that can be built upon any combination of the previously mentioned parallel programming models.
- SINGLE PROGRAM: All tasks execute their copy of the same program simultaneously. This program can be threads, message passing, data parallel or hybrid.
- MULTIPLE DATA: All tasks may use different data
- SPMD programs usually have the necessary logic programmed into them to allow different tasks to branch or conditionally execute only those parts of the program they are designed to execute. That is, tasks do not necessarily have to execute the entire program - perhaps only a portion of it.
- The SPMD model, using message passing or hybrid programming, is probably the most commonly used parallel programming model for multi-node clusters.

<center>
<img style="width:100%;display: block; margin: auto;" 
     src="https://hrandika.github.io/assets/img/posts/introduction-to-parallel-computing/spmd_model.gif">
</center>

### Multiple Program Multiple Data (MPMD):

- Like SPMD, MPMD is actually a "high level" programming model that can be built upon any combination of the previously mentioned parallel programming models.
- MULTIPLE PROGRAM: Tasks may execute different programs simultaneously. The programs can be threads, message passing, data parallel or hybrid.
- MULTIPLE DATA: All tasks may use different data
- MPMD applications are not as common as SPMD applications, but may be better suited for certain types of problems, particularly those that lend themselves better to functional decomposition than domain decomposition.

<center>
  <img  style="width:100%;display: block; margin: auto;" 
        src="https://hrandika.github.io/assets/img/posts/introduction-to-parallel-computing/mpmd_model.gif">
</center>

# GPU Programming

## Evolution of CUDA for GPU Programming

GPUs were historically used for enhanced gaming graphics, 3D displays, and design software. GPU-accelerated computing refers to the paradigm of enhanced programming using the GPU and CPU processing powers together for computationally expensive mathematical operations like matrix operations, ray casting, and 3D rendering.

Compute unified device architecture (CUDA) is an Nvidia-developed platform for parallel computing on CUDA-enabled GPUs. It opens the paradigm of general-purpose computing on graphical processing units (GPGPU). The CUDA platform provides an interface between common programming languages like C/C++ and Fortran with additional wrappers for Python

## CUDA Programming Architecture

CPU architecture is meant for sequential execution of complex control instructions or data management. GPU architecture is meant for parallel execution of simple control logic. GPUs are not standalone systems and a CPU (host) together with a GPU (device) forms a heterogeneous computation platform. The independent GPU and CPU memory communicate via a PCI-express bus.

A CUDA-compliant code has two components: computationally light CPU (host) code and computationally expensive GPU (device) code that performs parallel execution. A CUDA program has separately defined CPU and GPU code. The GPU code consists only of the functions that are going to be parallelly executed on it. OpenCL is the open-source version of CUDA and runs on CPUs and GPUs from almost all vendors.

<center>
  <img  style="width:100%;display: block; margin: auto;" 
        src="https://hrandika.github.io/assets/img/posts/introduction-to-parallel-computing/NZRVETsafXwO6eq5Yg4yQMGteH40HPjWStMWzS9L.png">
</center>

During the execution of the CUDA code, memory exchange happens between the host and the device. The device executes the code and then returns the result to the host. While a normal C/C++ code has a .c or .cpp suffix, a CUDA code has a .cu extension and uses the nvcc compiler.

A grid is a collection of all threads of the parallel cores running at the moment spawned by a single compute kernel. Each grid has several blocks, each containing several individual threads. The grid can have multi-dimensional (1D, 2D and 3D) blocks and each block can have a multi-dimensional (1D, 2D, and 3D) thread arrangement. A CUDA thread is very analogous to pthread in terms of abstraction for control of logical threads.

<center>
  <img  style="width:100%;display: block; margin: auto;" 
        src="https://hrandika.github.io/assets/img/posts/introduction-to-parallel-computing/ncOtXUifQ0Q80owjBvKDzqWV9wprgSg6gB3e1tjO.png">
</center>


---

#### References

[Introduction to parallel computing](https://computing.llnl.gov/tutorials/parallel_comp)
