export type DmsFoldersEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFoldersEventStateMachine {
  private allowedTransitions: Record<DmsFoldersEventState, DmsFoldersEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFoldersEventState, to: DmsFoldersEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFoldersEventState, to: DmsFoldersEventState): DmsFoldersEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFoldersEvent: " + from + " -> " + to);
    }
    return to;
  }
}
