export type DmsFilesStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFilesStateStateMachine {
  private allowedTransitions: Record<DmsFilesStateState, DmsFilesStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFilesStateState, to: DmsFilesStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFilesStateState, to: DmsFilesStateState): DmsFilesStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFilesState: " + from + " -> " + to);
    }
    return to;
  }
}
