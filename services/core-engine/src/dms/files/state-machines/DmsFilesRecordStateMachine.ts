export type DmsFilesRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFilesRecordStateMachine {
  private allowedTransitions: Record<DmsFilesRecordState, DmsFilesRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFilesRecordState, to: DmsFilesRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFilesRecordState, to: DmsFilesRecordState): DmsFilesRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFilesRecord: " + from + " -> " + to);
    }
    return to;
  }
}
