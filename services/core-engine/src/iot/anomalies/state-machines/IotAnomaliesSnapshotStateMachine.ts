export type IotAnomaliesSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotAnomaliesSnapshotStateMachine {
  private allowedTransitions: Record<IotAnomaliesSnapshotState, IotAnomaliesSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotAnomaliesSnapshotState, to: IotAnomaliesSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotAnomaliesSnapshotState, to: IotAnomaliesSnapshotState): IotAnomaliesSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotAnomaliesSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
