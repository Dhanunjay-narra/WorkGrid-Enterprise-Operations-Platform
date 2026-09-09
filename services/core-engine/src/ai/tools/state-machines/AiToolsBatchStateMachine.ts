export type AiToolsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiToolsBatchStateMachine {
  private allowedTransitions: Record<AiToolsBatchState, AiToolsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiToolsBatchState, to: AiToolsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiToolsBatchState, to: AiToolsBatchState): AiToolsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiToolsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
