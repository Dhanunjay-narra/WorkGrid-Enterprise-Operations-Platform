export type IotTelemetryEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotTelemetryEventStateMachine {
  private allowedTransitions: Record<IotTelemetryEventState, IotTelemetryEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotTelemetryEventState, to: IotTelemetryEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotTelemetryEventState, to: IotTelemetryEventState): IotTelemetryEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotTelemetryEvent: " + from + " -> " + to);
    }
    return to;
  }
}
