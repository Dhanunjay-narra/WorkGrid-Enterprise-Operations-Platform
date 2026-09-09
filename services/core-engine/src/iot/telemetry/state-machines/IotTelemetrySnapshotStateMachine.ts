export type IotTelemetrySnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotTelemetrySnapshotStateMachine {
  private allowedTransitions: Record<IotTelemetrySnapshotState, IotTelemetrySnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotTelemetrySnapshotState, to: IotTelemetrySnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotTelemetrySnapshotState, to: IotTelemetrySnapshotState): IotTelemetrySnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotTelemetrySnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
