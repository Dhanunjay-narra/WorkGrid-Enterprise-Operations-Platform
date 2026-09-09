export type DmsFoldersThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFoldersThresholdStateMachine {
  private allowedTransitions: Record<DmsFoldersThresholdState, DmsFoldersThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFoldersThresholdState, to: DmsFoldersThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFoldersThresholdState, to: DmsFoldersThresholdState): DmsFoldersThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFoldersThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
