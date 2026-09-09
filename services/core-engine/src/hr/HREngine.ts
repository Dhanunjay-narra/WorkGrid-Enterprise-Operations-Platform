import { Employee, UUID } from '@nexora/types';

export class HREngine {
  private employees = new Map<UUID, Employee>();

  public addEmployee(tenantId: UUID, userId: UUID, department: string, designation: string): Employee {
    const employee: Employee = {
      id: 'emp_' + Math.random().toString(36).substring(2, 9),
      tenantId,
      userId,
      employeeCode: 'EMP-' + Math.floor(1000 + Math.random() * 9000),
      department,
      designation
    };
    this.employees.set(employee.id, employee);
    return employee;
  }

  public getEmployeesByDepartment(tenantId: UUID, department: string): Employee[] {
    return Array.from(this.employees.values()).filter(
      (e) => e.tenantId === tenantId && e.department === department
    );
  }
}
