export interface LeavePolicy {
  annualLeaveDays: number;
  sickLeaveDays: number;
  maternityPaternityDays: number;
  carryForwardMaxDays: number;
}

export interface EmployeeLeaveBalance {
  allocatedAnnual: number;
  usedAnnual: number;
  allocatedSick: number;
  usedSick: number;
  carriedForward: number;
}

export class LeaveEntitlementEngine {
  public calculateRemainingLeave(balance: EmployeeLeaveBalance): { remainingAnnual: number; remainingSick: number; totalAvailable: number } {
    const remainingAnnual = Math.max(0, (balance.allocatedAnnual + balance.carriedForward) - balance.usedAnnual);
    const remainingSick = Math.max(0, balance.allocatedSick - balance.usedSick);
    const totalAvailable = remainingAnnual + remainingSick;

    return { remainingAnnual, remainingSick, totalAvailable };
  }

  public validateLeaveRequest(balance: EmployeeLeaveBalance, type: 'ANNUAL' | 'SICK', requestedDays: number): { isApproved: boolean; reason?: string } {
    const { remainingAnnual, remainingSick } = this.calculateRemainingLeave(balance);

    if (type === 'ANNUAL' && requestedDays > remainingAnnual) {
      return { isApproved: false, reason: `Insufficient annual leave balance. Requested: ${requestedDays}, Available: ${remainingAnnual}` };
    }
    if (type === 'SICK' && requestedDays > remainingSick) {
      return { isApproved: false, reason: `Insufficient sick leave balance. Requested: ${requestedDays}, Available: ${remainingSick}` };
    }

    return { isApproved: true };
  }
}
