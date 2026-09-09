export type DmsFoldersQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFoldersQueueStateMachine {
  private allowedTransitions: Record<DmsFoldersQueueState, DmsFoldersQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFoldersQueueState, to: DmsFoldersQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFoldersQueueState, to: DmsFoldersQueueState): DmsFoldersQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFoldersQueue: " + from + " -> " + to);
    }
    return to;
  }
}
