export type IotAnomaliesAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotAnomaliesAuditLogStateMachine {
  private allowedTransitions: Record<IotAnomaliesAuditLogState, IotAnomaliesAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotAnomaliesAuditLogState, to: IotAnomaliesAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotAnomaliesAuditLogState, to: IotAnomaliesAuditLogState): IotAnomaliesAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotAnomaliesAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
