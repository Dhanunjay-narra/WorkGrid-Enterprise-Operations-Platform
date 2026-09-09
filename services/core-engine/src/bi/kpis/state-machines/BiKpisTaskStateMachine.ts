export type BiKpisTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiKpisTaskStateMachine {
  private allowedTransitions: Record<BiKpisTaskState, BiKpisTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiKpisTaskState, to: BiKpisTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiKpisTaskState, to: BiKpisTaskState): BiKpisTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiKpisTask: " + from + " -> " + to);
    }
    return to;
  }
}
