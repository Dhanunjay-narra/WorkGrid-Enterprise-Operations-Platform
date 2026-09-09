export type DmsFoldersStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFoldersStateStateMachine {
  private allowedTransitions: Record<DmsFoldersStateState, DmsFoldersStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFoldersStateState, to: DmsFoldersStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFoldersStateState, to: DmsFoldersStateState): DmsFoldersStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFoldersState: " + from + " -> " + to);
    }
    return to;
  }
}
