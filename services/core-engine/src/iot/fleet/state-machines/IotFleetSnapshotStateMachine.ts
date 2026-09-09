export type IotFleetSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFleetSnapshotStateMachine {
  private allowedTransitions: Record<IotFleetSnapshotState, IotFleetSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFleetSnapshotState, to: IotFleetSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFleetSnapshotState, to: IotFleetSnapshotState): IotFleetSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFleetSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
