# Overview

## Serial computing

Computers were designed to execute instruction one after another(sequentially). They were executed using a single processor. The **_problem_** is broken down to small discrete serial set of **_instructions_**. Only one instruction may execute during at any moment of time.

<center><img style="width:100%;display: block; margin: auto;" src="https://hrandika.github.io/assets/img/posts/introduction-to-parallel-computing/serialProblem.gif">
</center>

<center><a href="https://computing.llnl.gov/tutorials/parallel_comp">Image source</a></center>

## Parallel computing

Simultaneous use of multiple compute resources to solve a computational **_problem_**.Problem need to break down in to discrete parts.Then each problem is break down to series of instructions.Instruction from each part executed simultaneously on different processors.There is an overall coordination need to happen between each parts were executed.

<center><img style="width:100%;display: block; margin: auto;" src="https://hrandika.github.io/assets/img/posts/introduction-to-parallel-computing/parallelProblem.gif">
</center>

<center><a href="https://computing.llnl.gov/tutorials/parallel_comp">Image source</a></center>

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
