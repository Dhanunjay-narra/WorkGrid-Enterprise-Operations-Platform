export type BiKpisConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiKpisConfigStateMachine {
  private allowedTransitions: Record<BiKpisConfigState, BiKpisConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiKpisConfigState, to: BiKpisConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiKpisConfigState, to: BiKpisConfigState): BiKpisConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiKpisConfig: " + from + " -> " + to);
    }
    return to;
  }
}
