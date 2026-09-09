export type DmsFoldersSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFoldersSessionStateMachine {
  private allowedTransitions: Record<DmsFoldersSessionState, DmsFoldersSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFoldersSessionState, to: DmsFoldersSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFoldersSessionState, to: DmsFoldersSessionState): DmsFoldersSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFoldersSession: " + from + " -> " + to);
    }
    return to;
  }
}
