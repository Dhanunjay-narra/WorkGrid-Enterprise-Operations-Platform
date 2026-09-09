export type DmsFilesTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFilesTaskStateMachine {
  private allowedTransitions: Record<DmsFilesTaskState, DmsFilesTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFilesTaskState, to: DmsFilesTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFilesTaskState, to: DmsFilesTaskState): DmsFilesTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFilesTask: " + from + " -> " + to);
    }
    return to;
  }
}
