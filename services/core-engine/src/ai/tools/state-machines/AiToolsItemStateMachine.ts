export type AiToolsItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiToolsItemStateMachine {
  private allowedTransitions: Record<AiToolsItemState, AiToolsItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiToolsItemState, to: AiToolsItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiToolsItemState, to: AiToolsItemState): AiToolsItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiToolsItem: " + from + " -> " + to);
    }
    return to;
  }
}
