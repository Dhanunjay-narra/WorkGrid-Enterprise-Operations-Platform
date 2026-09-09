export type CommWebhooksSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommWebhooksSnapshotStateMachine {
  private allowedTransitions: Record<CommWebhooksSnapshotState, CommWebhooksSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommWebhooksSnapshotState, to: CommWebhooksSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommWebhooksSnapshotState, to: CommWebhooksSnapshotState): CommWebhooksSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommWebhooksSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
