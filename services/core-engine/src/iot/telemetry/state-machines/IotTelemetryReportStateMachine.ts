export type IotTelemetryReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotTelemetryReportStateMachine {
  private allowedTransitions: Record<IotTelemetryReportState, IotTelemetryReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotTelemetryReportState, to: IotTelemetryReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotTelemetryReportState, to: IotTelemetryReportState): IotTelemetryReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotTelemetryReport: " + from + " -> " + to);
    }
    return to;
  }
}
