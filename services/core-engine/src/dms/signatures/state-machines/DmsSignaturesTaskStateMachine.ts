export type DmsSignaturesTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsSignaturesTaskStateMachine {
  private allowedTransitions: Record<DmsSignaturesTaskState, DmsSignaturesTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsSignaturesTaskState, to: DmsSignaturesTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsSignaturesTaskState, to: DmsSignaturesTaskState): DmsSignaturesTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsSignaturesTask: " + from + " -> " + to);
    }
    return to;
  }
}
