export type DmsFoldersBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFoldersBatchStateMachine {
  private allowedTransitions: Record<DmsFoldersBatchState, DmsFoldersBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFoldersBatchState, to: DmsFoldersBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFoldersBatchState, to: DmsFoldersBatchState): DmsFoldersBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFoldersBatch: " + from + " -> " + to);
    }
    return to;
  }
}
