export type IotTelemetryAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotTelemetryAuditLogStateMachine {
  private allowedTransitions: Record<IotTelemetryAuditLogState, IotTelemetryAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotTelemetryAuditLogState, to: IotTelemetryAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotTelemetryAuditLogState, to: IotTelemetryAuditLogState): IotTelemetryAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotTelemetryAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
