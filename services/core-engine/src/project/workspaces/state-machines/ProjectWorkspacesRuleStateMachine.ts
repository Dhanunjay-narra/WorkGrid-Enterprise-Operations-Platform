export type ProjectWorkspacesRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectWorkspacesRuleStateMachine {
  private allowedTransitions: Record<ProjectWorkspacesRuleState, ProjectWorkspacesRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectWorkspacesRuleState, to: ProjectWorkspacesRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectWorkspacesRuleState, to: ProjectWorkspacesRuleState): ProjectWorkspacesRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectWorkspacesRule: " + from + " -> " + to);
    }
    return to;
  }
}
