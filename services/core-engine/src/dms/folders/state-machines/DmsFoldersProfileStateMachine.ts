export type DmsFoldersProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFoldersProfileStateMachine {
  private allowedTransitions: Record<DmsFoldersProfileState, DmsFoldersProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFoldersProfileState, to: DmsFoldersProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFoldersProfileState, to: DmsFoldersProfileState): DmsFoldersProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFoldersProfile: " + from + " -> " + to);
    }
    return to;
  }
}
