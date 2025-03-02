## Introduction

The MIPS-32 Pipeline Simulator is a software tool designed to simulate the execution of the MIPS 32bits with a five-stage pipeline architecture. The simulator provides a detailed, cycle-accurate and intuitive visualization of instruction execution, including the contents of the inter-stage registers, the instruction and data memories, the register files and all the significant control flags such as the `AluOP` or branching flags. 

The simulator supports a set of assmebly instructions as input, that are automatically validated for errors and translated to machine code that the simulator architecture can to execute.

![Interface Screenshot](/Documentation/src/img/ui_ss.png)

## Description

### Supported Instructions


**R Type** - Instructions between register operands
| Instruction | Syntax               | Operation                  |
|------------ |----------------------|----------------------------|
| **add**     | `add $rd, $rs, $rt`  | RF[rd] ← RF[rs] + RF[rt]   |
| **sub**     | `sub $rd, $rs, $rt`  | RF[rd] ← RF[rs] - RF[rt]   |
| **sll**     | `sll $rd, $rs, $rt`  | RF[rd] ← RF[rs] << RF[rt]  |
| **srl**     | `srl $rd, $rs, $rt`  | RF[rd] ← RF[rs] >> RF[rt]  |
| **and**     | `and $rd, $rs, $rt`  | RF[rd] ← RF[rs] & RF[rt]   |
| **or**      | `or $rd, $rs, $rt`   | RF[rd] ← RF[rs] | RF[rt]   |
| **xor**     | `xor $rd, $rs, $rt`  | RF[rd] ← RF[rs] ⊕ RF[rt]  |
| **beq**     | beq $rt, $rs, offset | If RF[$rs] = RF[$rt] then <br>  PC = PC + 1 + S<sub>Ext</sub>(offset) <br>  else <br> PC = PC + 1 |
|**bgtz** |bgtz $rs, offset| if RF[$rs] > 0 then <br> PC = PC + 1 + S<sub>Ext</sub>(offset) <br> else <br> PC = PC + 1
noop | noop | |

**I Type** - Instructions between a register and an immediate value
| Instruction | Syntax               | Operation                  |
|------------ |----------------------|----------------------------|
**addi** |addi $rt, $rs, |imm RF[rt] ← RF[rs] + S<sub>Ext</sub>(imm)|
**subi** | subi $rt, $rs, imm | RF[rt] ← RF[rs] - S<sub>Ext</sub>(imm)|
**lw** |lw $rt, $rs, imm |RF[rt] ← MEM[RF[rs] + S<sub>Ext</sub>(imm)]
**sw** | sw $rt, $rs, imm | MEM[RF[rs] + S<sub>Ext</sub>(imm)] ← RF[rt] |

## How to use

1. Clone the code.
2. Compile and start the back-end Java application.
3. Start the frontend Next.js web application.
4. Use the 'Modity Code' button from the side panel to upload assembly code.
5. Use the 'Tick' button to run the simulator for a single clock cycle. 
6. Inspect the desired signal values in the UI,
