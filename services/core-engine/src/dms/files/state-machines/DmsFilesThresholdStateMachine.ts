export type DmsFilesThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFilesThresholdStateMachine {
  private allowedTransitions: Record<DmsFilesThresholdState, DmsFilesThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFilesThresholdState, to: DmsFilesThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFilesThresholdState, to: DmsFilesThresholdState): DmsFilesThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFilesThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
