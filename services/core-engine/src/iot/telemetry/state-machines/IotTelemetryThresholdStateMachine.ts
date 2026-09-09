export type IotTelemetryThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotTelemetryThresholdStateMachine {
  private allowedTransitions: Record<IotTelemetryThresholdState, IotTelemetryThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotTelemetryThresholdState, to: IotTelemetryThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotTelemetryThresholdState, to: IotTelemetryThresholdState): IotTelemetryThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotTelemetryThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
