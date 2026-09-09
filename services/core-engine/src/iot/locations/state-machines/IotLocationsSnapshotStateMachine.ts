export type IotLocationsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotLocationsSnapshotStateMachine {
  private allowedTransitions: Record<IotLocationsSnapshotState, IotLocationsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotLocationsSnapshotState, to: IotLocationsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotLocationsSnapshotState, to: IotLocationsSnapshotState): IotLocationsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotLocationsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
