export type DmsFoldersRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFoldersRecordStateMachine {
  private allowedTransitions: Record<DmsFoldersRecordState, DmsFoldersRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFoldersRecordState, to: DmsFoldersRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFoldersRecordState, to: DmsFoldersRecordState): DmsFoldersRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFoldersRecord: " + from + " -> " + to);
    }
    return to;
  }
}
