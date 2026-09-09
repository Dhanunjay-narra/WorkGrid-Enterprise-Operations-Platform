export type CommChannelsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommChannelsSnapshotStateMachine {
  private allowedTransitions: Record<CommChannelsSnapshotState, CommChannelsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommChannelsSnapshotState, to: CommChannelsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommChannelsSnapshotState, to: CommChannelsSnapshotState): CommChannelsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommChannelsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
