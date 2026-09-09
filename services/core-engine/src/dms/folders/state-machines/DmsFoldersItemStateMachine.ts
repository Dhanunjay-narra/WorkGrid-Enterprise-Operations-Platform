export type DmsFoldersItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFoldersItemStateMachine {
  private allowedTransitions: Record<DmsFoldersItemState, DmsFoldersItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFoldersItemState, to: DmsFoldersItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFoldersItemState, to: DmsFoldersItemState): DmsFoldersItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFoldersItem: " + from + " -> " + to);
    }
    return to;
  }
}
