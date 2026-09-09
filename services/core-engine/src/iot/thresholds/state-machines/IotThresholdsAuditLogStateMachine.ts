export type IotThresholdsAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotThresholdsAuditLogStateMachine {
  private allowedTransitions: Record<IotThresholdsAuditLogState, IotThresholdsAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotThresholdsAuditLogState, to: IotThresholdsAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotThresholdsAuditLogState, to: IotThresholdsAuditLogState): IotThresholdsAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotThresholdsAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
