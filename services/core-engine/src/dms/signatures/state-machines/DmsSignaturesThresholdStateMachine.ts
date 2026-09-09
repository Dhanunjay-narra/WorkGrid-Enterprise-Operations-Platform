export type DmsSignaturesThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsSignaturesThresholdStateMachine {
  private allowedTransitions: Record<DmsSignaturesThresholdState, DmsSignaturesThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsSignaturesThresholdState, to: DmsSignaturesThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsSignaturesThresholdState, to: DmsSignaturesThresholdState): DmsSignaturesThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsSignaturesThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
