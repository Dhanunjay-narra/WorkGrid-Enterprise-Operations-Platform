export type AiToolsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiToolsTaskStateMachine {
  private allowedTransitions: Record<AiToolsTaskState, AiToolsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiToolsTaskState, to: AiToolsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiToolsTaskState, to: AiToolsTaskState): AiToolsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiToolsTask: " + from + " -> " + to);
    }
    return to;
  }
}
