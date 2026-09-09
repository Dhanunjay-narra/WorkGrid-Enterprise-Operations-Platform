export type DmsFilesQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFilesQueueStateMachine {
  private allowedTransitions: Record<DmsFilesQueueState, DmsFilesQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFilesQueueState, to: DmsFilesQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFilesQueueState, to: DmsFilesQueueState): DmsFilesQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFilesQueue: " + from + " -> " + to);
    }
    return to;
  }
}
