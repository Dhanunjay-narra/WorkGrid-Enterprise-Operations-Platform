export type BiKpisEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiKpisEventStateMachine {
  private allowedTransitions: Record<BiKpisEventState, BiKpisEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiKpisEventState, to: BiKpisEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiKpisEventState, to: BiKpisEventState): BiKpisEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiKpisEvent: " + from + " -> " + to);
    }
    return to;
  }
}
