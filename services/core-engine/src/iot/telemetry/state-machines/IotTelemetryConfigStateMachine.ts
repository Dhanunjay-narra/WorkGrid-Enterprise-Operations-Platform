export type IotTelemetryConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotTelemetryConfigStateMachine {
  private allowedTransitions: Record<IotTelemetryConfigState, IotTelemetryConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotTelemetryConfigState, to: IotTelemetryConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotTelemetryConfigState, to: IotTelemetryConfigState): IotTelemetryConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotTelemetryConfig: " + from + " -> " + to);
    }
    return to;
  }
}
