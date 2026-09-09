export type IotDevicesAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotDevicesAuditLogStateMachine {
  private allowedTransitions: Record<IotDevicesAuditLogState, IotDevicesAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotDevicesAuditLogState, to: IotDevicesAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotDevicesAuditLogState, to: IotDevicesAuditLogState): IotDevicesAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotDevicesAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
