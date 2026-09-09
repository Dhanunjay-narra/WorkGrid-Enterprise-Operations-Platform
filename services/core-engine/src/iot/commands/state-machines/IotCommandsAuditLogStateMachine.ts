export type IotCommandsAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotCommandsAuditLogStateMachine {
  private allowedTransitions: Record<IotCommandsAuditLogState, IotCommandsAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotCommandsAuditLogState, to: IotCommandsAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotCommandsAuditLogState, to: IotCommandsAuditLogState): IotCommandsAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotCommandsAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
