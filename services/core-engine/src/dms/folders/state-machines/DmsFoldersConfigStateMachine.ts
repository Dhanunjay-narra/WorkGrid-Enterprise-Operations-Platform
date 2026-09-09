export type DmsFoldersConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFoldersConfigStateMachine {
  private allowedTransitions: Record<DmsFoldersConfigState, DmsFoldersConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFoldersConfigState, to: DmsFoldersConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFoldersConfigState, to: DmsFoldersConfigState): DmsFoldersConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFoldersConfig: " + from + " -> " + to);
    }
    return to;
  }
}
