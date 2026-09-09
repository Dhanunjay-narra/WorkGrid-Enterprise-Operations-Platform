export type ProjectWorkspacesMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectWorkspacesMappingStateMachine {
  private allowedTransitions: Record<ProjectWorkspacesMappingState, ProjectWorkspacesMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectWorkspacesMappingState, to: ProjectWorkspacesMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectWorkspacesMappingState, to: ProjectWorkspacesMappingState): ProjectWorkspacesMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectWorkspacesMapping: " + from + " -> " + to);
    }
    return to;
  }
}
