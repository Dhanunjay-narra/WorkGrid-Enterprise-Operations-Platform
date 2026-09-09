export type DmsFoldersPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFoldersPolicyStateMachine {
  private allowedTransitions: Record<DmsFoldersPolicyState, DmsFoldersPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFoldersPolicyState, to: DmsFoldersPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFoldersPolicyState, to: DmsFoldersPolicyState): DmsFoldersPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFoldersPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
