export type IotThresholdsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotThresholdsSnapshotStateMachine {
  private allowedTransitions: Record<IotThresholdsSnapshotState, IotThresholdsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotThresholdsSnapshotState, to: IotThresholdsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotThresholdsSnapshotState, to: IotThresholdsSnapshotState): IotThresholdsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotThresholdsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
