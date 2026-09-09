export type IotTelemetryQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotTelemetryQueueStateMachine {
  private allowedTransitions: Record<IotTelemetryQueueState, IotTelemetryQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotTelemetryQueueState, to: IotTelemetryQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotTelemetryQueueState, to: IotTelemetryQueueState): IotTelemetryQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotTelemetryQueue: " + from + " -> " + to);
    }
    return to;
  }
}
