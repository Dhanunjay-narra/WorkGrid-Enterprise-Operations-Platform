export type IotTelemetryBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotTelemetryBatchStateMachine {
  private allowedTransitions: Record<IotTelemetryBatchState, IotTelemetryBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotTelemetryBatchState, to: IotTelemetryBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotTelemetryBatchState, to: IotTelemetryBatchState): IotTelemetryBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotTelemetryBatch: " + from + " -> " + to);
    }
    return to;
  }
}
