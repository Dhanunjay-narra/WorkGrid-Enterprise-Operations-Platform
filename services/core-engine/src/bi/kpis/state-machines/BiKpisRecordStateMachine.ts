export type BiKpisRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiKpisRecordStateMachine {
  private allowedTransitions: Record<BiKpisRecordState, BiKpisRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiKpisRecordState, to: BiKpisRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiKpisRecordState, to: BiKpisRecordState): BiKpisRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiKpisRecord: " + from + " -> " + to);
    }
    return to;
  }
}
