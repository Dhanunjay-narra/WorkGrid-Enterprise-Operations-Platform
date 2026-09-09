export type AiMemoryTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiMemoryTaskStateMachine {
  private allowedTransitions: Record<AiMemoryTaskState, AiMemoryTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiMemoryTaskState, to: AiMemoryTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiMemoryTaskState, to: AiMemoryTaskState): AiMemoryTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiMemoryTask: " + from + " -> " + to);
    }
    return to;
  }
}
