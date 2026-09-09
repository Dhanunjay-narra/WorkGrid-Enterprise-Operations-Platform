export type AiToolsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiToolsEventStateMachine {
  private allowedTransitions: Record<AiToolsEventState, AiToolsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiToolsEventState, to: AiToolsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiToolsEventState, to: AiToolsEventState): AiToolsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiToolsEvent: " + from + " -> " + to);
    }
    return to;
  }
}
