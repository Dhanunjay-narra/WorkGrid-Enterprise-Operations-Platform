export type DmsFoldersTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFoldersTaskStateMachine {
  private allowedTransitions: Record<DmsFoldersTaskState, DmsFoldersTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFoldersTaskState, to: DmsFoldersTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFoldersTaskState, to: DmsFoldersTaskState): DmsFoldersTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFoldersTask: " + from + " -> " + to);
    }
    return to;
  }
}
